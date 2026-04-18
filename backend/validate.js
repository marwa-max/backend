import pkg from "jsrsasign";
const { KJUR } = pkg;

export function validateToken(token) {
    const key = "$AhmedIsAwesome!";
    return KJUR.jws.JWS.verifyJWT(token, key, { alg: ["HS512"] });
}