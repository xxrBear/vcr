const posts = [
  {
    id: 1,
    title: '第一篇博客',
    excerpt: '这是第一篇博客的摘要，欢迎阅读！',
    date: '2025-06-29',
  },
  {
    id: 2,
    title: '第二篇博客',
    excerpt: '第二篇博客内容简要介绍。',
    date: '2025-06-28',
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* 内容区，使用 p-8 和 max-w-3xl 居中 */}
      <main className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 drop-shadow-md">
          简易博客系统
        </h1>

        {posts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => alert(`点击了文章：${post.title}`)}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>发布时间: {post.date}</span>
              <button
                className="text-indigo-500 hover:text-indigo-700 font-medium"
                onClick={e => {
                  e.stopPropagation();
                  alert(`点赞文章：${post.title}`);
                }}
              >
                👍 点赞
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* footer 放在底部 */}
      <footer className="mt-8 text-center text-gray-400 text-sm p-4">
        © 2025 简易博客系统 版权所有
      </footer>
    </div>
  );
}