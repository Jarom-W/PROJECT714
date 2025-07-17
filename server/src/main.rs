use axum::{
    extract::{Path, Query},
    routing::{get, post},
    Router,
    Json,
};

use serde::{Deserialize, Serialize};

use std::{
    net::SocketAddr,
    collections::HashMap,
};

use tower_http::{
    cors::{Any, CorsLayer},
    trace::TraceLayer,
};

async fn greet(Query(params): Query<HashMap<String, String>>) -> String {
    if let Some(name) = params.get("name") {
        format!("Hello, {}!", name)
    } else {
        "Hello, anonymous.".to_string()
    }
}

async fn hello(Path(name): Path<String>) -> String {
    format!("Hello, {}!", name)
}

#[tokio::main]
async fn main() {
    // Build application with a route.
    let app = Router::new()
        .route("/", get(root_handler))
        .route("/echo", post(echo_handler))
        .route("/hello/:name", get(hello))
        .route("/greet", get(greet))
    //Add logging middleware to see incoming requests.
        .layer(TraceLayer::new_for_http())
        .layer(
            CorsLayer::new()
            .allow_origin(Any)
            .allow_methods(Any)
            .allow_headers(Any),
        );

    // Set the address to run on.
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Listening on {}", addr);

    //run server
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
async fn root_handler() -> &'static str {
    "Hello, Server!"
}

#[derive(Serialize, Deserialize)]
struct Message {
    content: String,
}
async fn echo_handler(Json(payload): Json<Message>) -> Result<Json<Message>, impl IntoResponse> {
    if payload.content.trim().is_empty() {
        Err((StatusCode::BAD_REQUEST, "Content cannot be empty"))
    } else {
        Ok(Json(payload))
    }
}

