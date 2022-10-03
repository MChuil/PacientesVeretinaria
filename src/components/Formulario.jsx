const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
              <input id="mascota" type="text" placeholder="Nombre de la mascota" className="w-full mt-2 border-2 p-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
              <input id="propietario" type="text" placeholder="Nombre del propietario" className="w-full mt-2 border-2 p-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
              <input id="email" type="email" placeholder="Email del propietario" className="w-full mt-2 border-2 p-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
              <input id="alta" type="date" className="w-full mt-2 border-2 p-2 placeholder-gray-400 rounded-md"/>
            </div>
            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Sintomas</label>
              <textarea id="sintomas" className="w-full mt-2 border-2 p-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"/>
            </div>
            <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase fonr-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar paciente"/>
        </form>
    </div>
  )
}

export default Formulario
