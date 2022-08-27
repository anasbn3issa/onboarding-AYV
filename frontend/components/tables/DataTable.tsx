export default function DataTable({
  data = [
    { username: 'medali', role: 'admin' },
    { username: 'marwen', role: 'user' },
    { username: 'salma', role: 'user' },
  ],
  columns = [
    { title: 'username', field: 'username' },
    { title: 'role', field: 'role' },
  ],
}) {
  console.log('DataTable');

  return (
    <>
      {/* in this table , the headings should iterate columns values, the data should iterate data from props */}
      <div className="flex flex-col w-full border-t border-r border-black">
        <div className="flex flex-shrink-0 bg-black text-white">
            {Object.keys(columns).map((key, index) => {
              return (
                <span key={index} className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
                  {columns[key].field}
                </span>
              );
            })}
        </div>

        <div className="overflow-auto">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex flex-col w-full">
                <div className="flex flex-shrink-0 bg-white px-1">
                  {Object.keys(item).map((key, index) => {
                    return (
                      <span key={index} className="flex items-center flex-grow w-0 h-10 px-2 border-b border-l border-black">
                        {item[key]}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
