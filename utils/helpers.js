module.exports = {
    format_date: (date) => {
      const d = new Date(date);
  
      const formattedDate = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
      const formattedTime = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  
      return `${formattedDate} at ${formattedTime}`;
    },
  };
  