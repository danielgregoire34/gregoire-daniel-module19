import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => 
{
  const openjateDB = await openDB('jate',1);
  const writejate = openjateDB.transaction('jate','readwrite');
  const storejate = writejate.objectStore("jate");
  const contentjate = storejate.put({id:1,value:content});
  const resultsjate = await contentjate;
  console.log(resultsjate);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const openjateDB = await openDB('jate',1);
  const writejate = openjateDB.transaction('jate','readonly');
  const storejate = writejate.objectStore("jate");
  const contentjate = storejate.getAll();
  const resultsjate = await contentjate;
  console.log(resultsjate);
};

initdb();
