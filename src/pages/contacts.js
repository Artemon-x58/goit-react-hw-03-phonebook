import { ContactsList } from 'components/ContactsList/ContsctsList';
import { Filter } from 'components/Filter/Filter';
import { FormComponent } from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <FormComponent />
      <Filter />
      {isLoading ? 'Request in progress...' : <ContactsList />}
    </>
  );
};
