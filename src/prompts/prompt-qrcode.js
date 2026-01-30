import chalk from "chalk";

const promptQrcode = [
    {
    name: "link",
    description: chalk.green(
        "Digite o link para gerar o QR Code"
    ),
    },
    {
    name: "type",
    description: chalk.green(
        "Digite o tipo do QR Code (1 - NORMAL, 2 - TERMINAL)"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.black.italic("Escolha somente entre 1 e 2"),
    required: true,
    },
];

export default promptQrcode;