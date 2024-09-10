// @ts-nocheck
const uname = (await import("unique-names-generator")).default;

const config = { separator: " ", style: "capital", length: "2", dictionaries: [uname.names, uname.colors, uname.adjectives, uname.animals, uname.countries] };

export default function () {
    const email_username = uname.uniqueNamesGenerator(config).replaceAll(" ", "-");
    config.length = 1;
    const email_domain = uname.uniqueNamesGenerator(config).replaceAll(" ", "-");
    return `${email_username}@${email_domain}.com`;
}
