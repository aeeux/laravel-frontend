const posts = [
  {
    id: 1,
    title: "Gaming Mouse",
    href: "#",
    description:
      "The Gaming Headset offers impressive sound quality, providing an immersive gaming experience. Its comfortable fit, with plush ear cups and an adjustable headband, ensures long-lasting comfort during extended gaming sessions. While bass response and cable length could be improved, this headset is a great choice for budget-conscious gamers seeking a balance between performance and affordability.",
    date: "May 3, 2023",
    author: {
      name: "Lucas Jolibois",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/dn2oy1djs/image/upload/v1683127045/Lucas_3_dsming.webp",
    },
  },
  {
    id: 2,
    title: "Gaming Mouse",
    href: "#",
    description:
      "The Gaming Keyboard is a standout performer, offering an exceptional gaming experience. With its responsive and tactile keys, customizable backlighting, and durable construction, this keyboard delivers precision and style. Its ergonomic design ensures comfortable typing and gaming sessions, making it an excellent choice for gamers of all levels.",
    date: "May 2, 2023",
    author: {
      name: "Andreas Eriksen",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/dn2oy1djs/image/upload/v1683127049/Andreas_pwwqnb.webp",
    },
  },
  {
    id: 3,
    title: "Gaming Mouse",
    href: "#",
    description:
      "The Gaming Mouse i bought exceeded my expectations with its exceptional precision, comfortable design, and extensive customization options. It flawlessly tracks movements, fits comfortably in hand, and allows for personalized settings, making it a great value for gamers seeking an affordable yet high-performing mouse.",
    date: "May 1, 2023",
    author: {
      name: "Daud Mir",
      href: "#",
      imageUrl:
        "https://res.cloudinary.com/dn2oy1djs/image/upload/v1675354856/1646396337706_m0b0ac.png",
    },
  },
  // More posts...
];

export default function Reviews() {
  return (
    <div className="" id="reviews">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Reviews ˗ˏˋ ★ ˎˊ˗
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here you can see some of our latest reviews
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{post.date}</time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
