export const getDays = (date: string) => {
  if (date === undefined) return 0;

  const today = new Date();
  const dueDate = new Date(date);
  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const getDueMessage = (date: string) => {
  if (date === undefined) return "";
  const days = getDays(date);
  let message = "";
  if (days === 0) message = "Today";
  if (days === 1) message = "Tomorrow";
  if (days > 1) message = `${days} days left`;
  if (days < 0) message = `Overdue by ${Math.abs(days)} days`;
  return (
    <>
      <div className={days > 0 ? 'card-status__indicator' : 'card-status__indicator card-status__indicator--overdue'}></div>
      <span>{message}</span>
    </>
  );
};
