interface AddedProductAlert {
  showAddedProductAlert: boolean;
}

const AddedProductAlert = ({showAddedProductAlert}: AddedProductAlert) => {
  return (
    
    <figure
      className={`transition-all duration-700 ease-in py-1 px-5 bg-green-300 text-green-800 rounded-lg border border-green-800 fixed top-24 ${showAddedProductAlert ? 'left-[50%]' : 'left-[-1000%]'}`}
    >
      <figcaption>Product Added!</figcaption>
    </figure>
  )
}

export default AddedProductAlert;