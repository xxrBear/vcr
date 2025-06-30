
const posts = [
  {
    id: 1,
    title: "如何用 Vite 搭建 React 项目",
    summary: "本文介绍了如何使用 Vite 快速搭建 React 项目，并集成 TailwindCSS。",
    author: "小明",
    date: "2025-06-30",
  },
  {
    id: 2,
    title: "TailwindCSS 样式速查表",
    summary: "整理了常用的 TailwindCSS 样式类，方便开发时查阅。",
    author: "小红",
    date: "2025-06-29",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold ">熊大如如的猪窝</h1>
          <nav>
            <a href="#" className="text-gray-700 mx-2">🔍搜索</a>
            <a href="#" className="text-gray-700 mx-2">🏠主页</a>
            <a href="#" className="text-gray-700 mx-2">⏱️时间轴</a>
            <a href="#" className="text-gray-700 mx-2">🔖标签</a>
            <a href="#" className="text-gray-700 mx-2">🌟关于</a>
          </nav>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* 博客列表 */}
        <section className="flex-1">
          <h2 className="text-xl font-semibold mb-4">最新文章</h2>
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.summary}</p>
                <div className="mt-4 flex items-center text-sm text-gray-400">
                  <span>{post.author}</span>
                  <span className="mx-2">·</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* 展示图 */}
        <div className="hidden md:flex items-center justify-center w-80">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="展示图"
            className="rounded-full shadow-lg object-cover w-64 h-64"
          />
        </div>

      </main>
    </div>
  );
}