export const navOptions = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "listing",
      label: "All Jewellery",
      path: "/product/listing/all-products",
    },
    {
      id: "listinggold",
      label: "Gold",
      path: "/product/listing/gold",
    },
    {
      id: "listingsilver",
      label: "Silver",
      path: "/product/listing/silver",
    },
    {
      id: "listingdiamonds",
      label: "Diamond",
      path: "/product/listing/diamond",
    },
    {
      id: "listingring",
      label: "Rings",
      path: "/product/listing/ring",
    },
    {
      id: "listingearring",
      label: "Earrings",
      path: "/product/listing/earring",
    },
  ];
  
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "Manage All Products",
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/admin-view/add-product",
    },
  ];
  
  export const registrationFormControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter your name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
    
  ];
  
  export const loginFormControls = [
    {
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      componentType: "input",
    },
    {
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      componentType: "input",
    },
  ];
  
  export const adminAddProductformControls = [
    {
      id: "name",
      type: "text",
      placeholder: "Enter name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "price",
      type: "number",
      placeholder: "Enter price",
      label: "Price",
      componentType: "input",
    },
    
   {
    id: "weight",
    type: "String",
    placeholder: "Enter Weight",
    label: "weight",
    componentType: "input",
  },
    {
      id: "description",
      type: "text",
      placeholder: "Enter description",
      label: "Description",
      componentType: "input",
    },
    {
      id: "category",
      type: "",
      placeholder: "",
      label: "Category",
      componentType: "select",
      options: [
        {
          id: "gold",
          label: "Gold",
        },
        {
          id: "silver",
          label: "Silver",
        },
        {
          id: "diamond",
          label: "Diamond",
        },
        {
          id: "ring",
          label: "Ring"
        },
        {
          id: "earring",
          label: "Earrings"
        },
        
      ],
    },
    {
      id: "subcategory",
      type: "",
      placeholder: "",
      label: "subCategory",
      componentType: "select",
      options: [
        {
          id: " ",
          label: "-"
        },
        {
          id: "ring",
          label: "Ring"
        },
        {
          id: "earring",
          label: "Earrings"
        },
        
      ],
    },
    /*{
      id: "deliveryInfo",
      type: "text",
      placeholder: "Enter deliveryInfo",
      label: "Delivery Info",
      componentType: "input",
    },*/
    /*{
      id: "onSale",
      type: "",
      placeholder: "",
      label: "On Sale",
      componentType: "select",
      options: [
        {
          id: "yes",
          label: "Yes",
        },
        {
          id: "no",
          label: "No",
        },
      ],
    },
    {
      id: "priceDrop",
      type: "number",
      placeholder: "Enter Price Drop",
      label: "Price Drop",
      componentType: "input",
    },*/
  ];
  
  

  
  export const addNewAddressFormControls = [
    {
      id: "fullName",
      type: "input",
      placeholder: "Enter your full name",
      label: "Full Name",
      componentType: "input",
    },
    {
      id: "address",
      type: "input",
      placeholder: "Enter your full address",
      label: "Address",
      componentType: "input",
    },
    {
      id: "city",
      type: "input",
      placeholder: "Enter your city",
      label: "City",
      componentType: "input",
    },
    {
      id: "country",
      type: "input",
      placeholder: "Enter your country",
      label: "Country",
      componentType: "input",
    },
    {
      id: "postalCode",
      type: "input",
      placeholder: "Enter your postal code",
      label: "Postal Code",
      componentType: "input",
    },
  ];