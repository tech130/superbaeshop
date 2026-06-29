const { spawnSync } = require("child_process");
const path = require("path");

const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");
const existingNodeOptions = process.env.NODE_OPTIONS || "";
const legacyOpenSslFlag = "--openssl-legacy-provider";
const nodeOptions = existingNodeOptions.includes(legacyOpenSslFlag)
    ? existingNodeOptions
    : `${existingNodeOptions} ${legacyOpenSslFlag}`.trim();

const result = spawnSync(process.execPath, [nextBin, "build"], {
    stdio: "inherit",
    env: {
        ...process.env,
        NODE_OPTIONS: nodeOptions,
    },
});

process.exit(result.status === null ? 1 : result.status);
