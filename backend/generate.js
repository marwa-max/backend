import pkg from "jsrsasign";
const { KJUR } = pkg;

export function generateToken() {
    const claims = {
        Username: "ahmed",
        Age: 27,
        Fullname: "ahmed Hassan"

    };

    const key = "$AhmedIsAwesome!";

    const header = {
        alg: "HS512",
        typ: "JWT"
    };

    return KJUR.jws.JWS.sign(
        "HS512",
        JSON.stringify(header),
        JSON.stringify(claims),
        key
    );
}