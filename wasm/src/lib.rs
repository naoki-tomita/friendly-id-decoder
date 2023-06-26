use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn decode(id: &str) -> String {
    friendly_id::decode(id).unwrap().to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_decode() {
        let actual = decode(&"5wbwf6yUxVBcr48AMbz9cb");
        assert_eq!("c3587ec5-0976-497f-8374-61e0c2ea3da5", actual);
    }
}
