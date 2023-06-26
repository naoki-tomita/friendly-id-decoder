pub use self::DecodeError::*;

#[derive(Debug)]
pub enum DecodeError {
    InvalidBase62Byte(char, usize),
    ArithmeticOverflow,
}
