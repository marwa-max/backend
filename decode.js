import pkg from "jsrsasign";
const { KJUR, b64utos } = pkg;

export function decodeToken(token) {
    const parts = token.split(".");

    const header = KJUR.jws.JWS.readSafeJSONString(
        b64utos(parts[0])
    );

    const payload = KJUR.jws.JWS.readSafeJSONString(
        b64utos(parts[1])
    );

    return { header, payload };
}