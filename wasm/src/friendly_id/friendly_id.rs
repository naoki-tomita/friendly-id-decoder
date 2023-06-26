use uuid::Uuid;

use crate::friendly_id::base62;
use crate::friendly_id::error::DecodeError;

pub fn create() -> String {
    let uuid = Uuid::new_v4();
    return encode(&uuid);
}

pub fn encode(uuid: &Uuid) -> String {
    let data = uuid.as_u128();
    let base62 = base62::encode(data);
    return base62.to_string();
}

pub fn decode(id: &str) -> Result<Uuid, DecodeError> {
    match base62::decode(id) {
        Ok(base62) => return Ok(Uuid::from_u128(base62)),
        Err(e) => return Err(e),
    };
}
