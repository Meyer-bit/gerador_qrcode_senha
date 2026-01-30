import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.red(
            "Escolha uma opção (1 - QR Code ou 2 - Senha)"),
        pattern: /^[1-2]+$/,
        message: chalk.black.italic(
            "Escolha somente entre 1 e 2"),
        required: true,
    },
];

export default mainPrompt;