import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';  
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';  

const FormElements = () => {  
  return (  
    <>  
      <Breadcrumb pageName="Nouvelle recette" />  

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">  
        <div className="flex flex-col gap-9">  
          {/* Input Fields */}  
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">  
            <div className="flex flex-col gap-5.5 p-6.5">  
              
              <div>  
                <label className="mb-3 block text-black dark:text-white">Nom de la recette</label>  
                <input  
                  type="text"  
                  placeholder="Nom de la recette"  
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"  
                />  
              </div>  
              
              <div>  
                <label className="mb-3 block text-black dark:text-white">Ingrédients</label>  
                <input  
                  type="text"  
                  placeholder="Ingrédients"  
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"  
                />  
              </div>  
              
              <div>  
                <label className="mb-3 block text-black dark:text-white">Temps de cuisson</label>  
                <input  
                  type="text"  
                  placeholder="Temps de cuisson"  
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"  
                />  
              </div>  
              
              <div>  
                <label className="mb-3 block text-black dark:text-white">Étapes de la préparation</label>  
                <input  
                  type="text"  
                  placeholder="Étapes de la préparation"  
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"  
                />  
                <DatePickerOne />  
                <div>  
                  <label className="mb-3 block text-black dark:text-white">Télécharger une image</label>  
                  <input  
                    type="file"  
                    className="py-3 px-5 w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"  
                  />  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};  

export default FormElements;