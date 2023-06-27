import { decode } from "wasm";

const input = document.getElementById("input") as HTMLInputElement;
const dst = document.getElementById("dst") as HTMLInputElement;
async function main() {
  input.addEventListener("input", () => {
    try {
      const friendlyId = input.value.replace("FSBS", "");
      const result = decode(friendlyId);
      dst.value = result;
    } catch (e) {
      dst.value = "なんかおかしいです";
      console.log(e);
    }
  });
}

main();
