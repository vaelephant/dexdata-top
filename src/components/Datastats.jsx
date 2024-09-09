const stats = [
  { id: 1, name: 'Data transactions per day', value: '20000+' },

  { id: 3, name: 'Active users globally', value: '10000+' },

  { id: 4, name: 'AI models trained using our data', value: '5,000+' },
  { id: 5, name: 'Data providers on platform', value: '12,000+' },
 

  { id: 7, name: 'Data security incidents', value: '0' },
  
  { id: 9, name: 'Total data volume', value: '30 PB' }, // PB stands for Petabytes
]

export  function Datastats() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      
    </div>
  )
}
