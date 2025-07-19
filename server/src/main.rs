mod pqc;
mod handlers;

use axum::{
    routing::{get, post},
    Router,
};

use std::{
    net::SocketAddr,
};

use tower_http::{
    cors::{Any, CorsLayer},
    trace::TraceLayer,
};

use handlers::*;
#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "Post-Quantum API Ready" }))
        .route("/generate-keypair", get(generate_keys))
        .route("/encapsulate", post(encapsulate))
        .route("/decapsulate", post(decapsulate))
        .layer(CorsLayer::new().allow_origin(Any).allow_methods(Any).allow_headers(Any))
        .layer(TraceLayer::new_for_http());

    let addr = SocketAddr::from(([127,0,0,1], 3000));
    println!("Listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
