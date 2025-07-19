// Use only Kyber768 for now to avoid ambiguity
use pqcrypto_kyber::kyber768::{
    keypair, encapsulate, decapsulate, PublicKey, SecretKey, Ciphertext,
};
use pqcrypto_traits::kem::{PublicKey as _, SecretKey as _, Ciphertext as _, SharedSecret as _};

use base64::{engine::general_purpose, Engine as _};

// Helper for base64 encoding/decoding with current best practice
fn encode(bytes: &[u8]) -> String {
    general_purpose::STANDARD.encode(bytes)
}

fn decode(s: &str) -> Vec<u8> {
    general_purpose::STANDARD.decode(s).expect("Base64 decode failed")
}

pub fn generate_kyber_keypair() -> (String, String) {
    let (pk, sk) = keypair();
    (encode(pk.as_bytes()), encode(sk.as_bytes()))
}

pub fn encapsulate_to(pk_b64: &str) -> (String, String) {
    let pk_bytes = decode(pk_b64);
    let pk = PublicKey::from_bytes(&pk_bytes).expect("Invalid public key");
    let (ciphertext, shared_secret) = encapsulate(&pk);
    (
        encode(ciphertext.as_bytes()),
        encode(shared_secret.as_bytes()),
    )
}

pub fn decapsulate_from(cipher_b64: &str, sk_b64: &str) -> String {
    let ct_bytes = decode(cipher_b64);
    let sk_bytes = decode(sk_b64);
    let ct = Ciphertext::from_bytes(&ct_bytes).expect("Invalid ciphertext");
    let sk = SecretKey::from_bytes(&sk_bytes).expect("Invalid secret key");
    let shared = decapsulate(&ct, &sk);
    encode(shared.as_bytes())
}
