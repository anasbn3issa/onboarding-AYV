import { useState } from 'react';
import AddUpdateModal from '../../components/modals/AddUpdateModal';
import DataTable from '../../components/tables/DataTable';

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <DataTable />
      <button
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        Add User
      </button>
      <AddUpdateModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}
