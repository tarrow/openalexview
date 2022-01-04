  import ky from 'ky';
  
  export function getEntity (id) {
      return ky.get(`https://api.openalex.org/${id}`).json()
  }