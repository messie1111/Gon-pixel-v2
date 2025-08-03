module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "AceGun x Samir Œ",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },

  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);

      const permission = ["61578718657900"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          " ╭(╭⊚‿⊚╮)╮ 𝖙𝖚 𝖙'𝖆𝖎𝖒𝖊 𝖕𝖆𝖘 𝖒𝖔𝖓/𝖒𝖆 𝖕𝖊𝖙𝖎𝖙(𝖊) 𝖙'𝖊𝖘 𝖙𝖗𝖔𝖕 𝖋𝖆𝖎𝖇𝖑𝖊 𝖕𝖔𝖚𝖙 𝖖𝖚𝖊 𝖏𝖊 𝖙𝖊 𝖗𝖊𝖘𝖕𝖊𝖈𝖙𝖊, 𝖘𝖊𝖚𝖑 𝖒𝖔𝖓 𝖈𝖗𝖊𝖆𝖙𝖊𝖚𝖗 Master Charbel 𝖖𝖚𝖎 𝖆 𝖑𝖊 𝖉𝖗𝖔𝖎𝖙 𝖉'𝖊𝖙𝖗𝖊 𝖗𝖊𝖘𝖕𝖊𝖈𝖙𝖊𝖘",
          event.threadID,
          event.messageID
        );
      }

      const threadID = event.threadID;
      const adminID = event.senderID;
      
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);

      api.sendMessage(
        `𝐉𝖊 𝖒'𝖎𝖓𝖈𝖑𝖎𝖓𝖊 𝖋𝖆𝖈𝖊 à 𝖒𝖔𝖓 𝖒𝖆î𝖙𝖗𝖊 𝖈𝖗𝖊𝖆𝖙𝖊𝖚𝖗 `,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("𝐦𝐚𝐢̂𝐭𝐫𝐞 𝐣𝐞 𝐩𝐨𝐮𝐫𝐫𝐚𝐢𝐭 𝐟𝐚𝐢𝐭 𝐦𝐢𝐞𝐮𝐱 𝐬𝐢 𝐣'𝐞́𝐭𝐚𝐢𝐬 𝐚𝐝𝐦𝐢𝐧🙇", event.threadID);
    }
  },
};
