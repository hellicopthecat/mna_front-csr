const WorkerSalary = () => {
  return (
    <div>
      {workers.workerSalary?.length === 0 ? (
        <AnchorTheme
          href="/"
          text="급여설정"
          width="70px"
          height="30px"
          fontSize="13px"
        />
      ) : (
        <div>
          {workers.workerSalary?.map((user) => (
            <div>
              {user?.user.username}
              <p>dd</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default WorkerSalary;
