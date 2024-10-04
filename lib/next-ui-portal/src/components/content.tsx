export default function ThreeColumnLayout() {
  return (
    <div className='flex flex-wrap min-h-screen bg-gray-100 text-gray-800'>
      <aside className='w-full md:w-1/4 lg:w-1/6 bg-blue-500 p-4 text-white'>
        Left Sidebar
      </aside>
      <main className='flex-1 p-4'>Main Content</main>
      <aside className='w-full md:w-1/4 lg:w-1/6 bg-green-500 p-4 text-white'>
        Right Sidebar
      </aside>
    </div>
  )
}
