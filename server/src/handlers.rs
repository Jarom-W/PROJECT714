use axum::{Json};
use serde::{Deserialize, Serialize};
use crate::pqc;

#[derive(Serialize, Deserialize)]
pub struct KeyResponse {
    pub public_key: String,
    pub secret_key: String,
}

#[derive(Serialize, Deserialize)]
pub struct EncapsulateRequest {
    pub public_key: String,
}

#[derive(Serialize, Deserialize)]
pub struct EncapsulateResponse {
    pub ciphertext: String,
    pub shared_secret: String,
}

#[derive(Serialize, Deserialize)]
pub struct DecapsulateRequest {
    pub ciphertext: String,
    pub secret_key: String,
}
#[derive(Serialize, Deserialize)]
pub struct DecapsulateResponse {
    pub shared_secret:String,
}

pub async fn generate_keys() -> Json<KeyResponse> {
    let (pk, sk) = pqc::generate_kyber_keypair();
    Json(KeyResponse { public_key: pk, secret_key: sk})
}

pub async fn encapsulate(Json(req): Json<EncapsulateRequest>) -> Json<EncapsulateResponse> {
    let (ct, ss) = pqc::encapsulate_to(&req.public_key);
    Json(EncapsulateResponse { ciphertext: ct, shared_secret: ss})
}

pub async fn decapsulate(Json(req): Json<DecapsulateRequest>) -> Json<DecapsulateResponse> {
    let ss = pqc::decapsulate_from(&req.ciphertext, &req.secret_key);
    Json(DecapsulateResponse { shared_secret: ss})
} 
