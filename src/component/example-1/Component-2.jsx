
export const Component2 = ({name,email,age}) => {
  return (
    <div>
      <h1 className="text-amber-950 font-bold">Component2-{email} - {age}</h1>
      <div className="font-black text-6xl">

      {name}
      </div>
    </div>
  )
}

