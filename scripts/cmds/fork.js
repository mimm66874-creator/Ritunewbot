const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

// 🔒 AUTHOR LOCK
const LOCKED_AUTHOR = "FARHAN-KHAN";

module.exports = {
  config: {
    name: "fork",
    aliases: ["repo", "link"],
    version: "3.0",
    author: LOCKED_AUTHOR,
    countDown: 3,
    role: 0,
    longDescription: "Styled fork system with dual links",
    category: "system",
    guide: { en: "{pn}" }
  },

  onStart: async function ({ message }) {
    try {

      // 🔒 author protection
      if (module.exports.config.author !== LOCKED_AUTHOR) {
        return message.reply("❌ AUTHOR LOCKED!");
      }

      const text =
`╔═━━━✥◈✥━━━═╗
     🌟 𝗢𝗪𝗡𝗘𝗥 𝗙𝗢𝗥𝗞 𝗭𝗢𝗡𝗘 🌟
╚═━━━✥◈✥━━━═╝

👑 SIYAM HASAN (OWNER)

━━━━━━━━━━━━━━━━━━━━━━━
🔗 FACEBOOK ACCOUNT
━━━━━━━━━━━━━━━━━━━━━━━

\`\`\`
https://www.facebook.com/share/1DzXBFvoBh/
\`\`\`


━━━━━━━━━━━━━━━━━━━━━━━
⚡ FORK LINK 1 (GOAT BOT)
━━━━━━━━━━━━━━━━━━━━━━━

\`\`\`
https://www.facebook.com/share/1DzXBFvoBh/
\`\`\`





━━━━━━━━━━━━━━━━━━━━━━━
✨ FORK LINK 2 (SIYAM HASAN BITU)
━━━━━━━━━━━━━━━━━━━━━━━

\`\`\`
https://www.facebook.com/share/1DzXBFvoBh/
\`\`\`


━━━━━━━━━━━━━━━━━━━━━━━
📌 INSTRUCTION
━━━━━━━━━━━━━━━━━━━━━━━

👉 fork করতে লিখো: fork2

━━━━━━━━━━━━━━━━━━━━━━━
⚡ Powered By মালেশিয়ার সিঙ্গেল বয় 💀
━━━━━━━━━━━━━━━━━━━━━━━`;

      const imgUrl = "https://files.catbox.moe/21jqpc.jpg";

      const cacheDir = path.join(__dirname, "cache");
      const filePath = path.join(cacheDir, "fork.jpg");

      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      const response = await axios.get(imgUrl, {
        responseType: "arraybuffer"
      });

      fs.writeFileSync(filePath, Buffer.from(response.data));

      await message.reply({
        body: text,
        attachment: fs.createReadStream(filePath)
      });

      fs.unlinkSync(filePath);

    } catch (err) {
      console.error("Fork command error:", err);
      message.reply("❌ Failed to send fork message!");
    }
  }
};
