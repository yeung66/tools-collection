
export default function Home() {
  const paras = [
    "我的个人工具网站是一个集文字处理工具和图片处理工具于一体的网站，旨在为用户提供方便快捷的工具使用体验。网站中的工具主要通过JavaScript实现，所有的数据处理都在本地上进行，保证了用户数据的安全性和隐私性。",
    "在文字处理方面，网站提供了多种常用的工具，如文本编辑器、字符计数器、正则表达式工具等，用户可以根据自己的需求选择使用。同时，网站还提供了一些实用的文本转换工具，如大小写转换器、HTML转义工具等，方便用户进行文本格式转换和处理。",
    "在图片处理方面，网站提供了多种常用的工具，如图片压缩器、图片裁剪工具、图片格式转换器等，用户可以根据自己的需求选择使用。同时，网站还提供了一些实用的图片处理工具，如图片滤镜、图片水印等，方便用户进行图片美化和处理。",
    "总之，我的个人工具网站是一个集文字处理工具和图片处理工具于一体的网站，通过JavaScript实现，所有的数据处理都在本地上进行，为用户提供方便快捷的工具使用体验。"
    ]
  return (
    <>
      <div className='flex flex-col justify-center items-center max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 my-5'>
        <h2 className='py-2 my-2 text-xl font-bold'>常用工具合集</h2>
        { paras.map((para, _) => (<p className="p-2 w-2/3">{para}</p>))}
      </div>
    </>
  );
}
