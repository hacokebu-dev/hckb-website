import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { getBlogPost, getBlogPosts } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentLang, getLocalizedPath } = useLanguage();

  const post = getBlogPost(id || '', currentLang as 'en' | 'ko');
  const allPosts = getBlogPosts(currentLang as 'en' | 'ko');
  const currentIndex = allPosts.findIndex((item) => item.id === id);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const truncateTitle = (title: string, maxLength = 30) => {
    if (title.length <= maxLength) return title;
    return `${title.slice(0, maxLength)}...`;
  };

  if (!post) {
    return (
      <Layout>
        <div className="container-main py-24 text-center">
          <h1 className="text-2xl text-ivory">Post not found</h1>
        </div>
      </Layout>
    );
  }

  const metaDescription = post.description || post.content.substring(0, 155).replace(/[#*_\n]/g, '');
  const canonicalUrl = `https://hacokebu.com/${currentLang === 'ko' ? `ko/blog/${id}/` : `blog/${id}/`}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": metaDescription,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "HACO & KEBU",
      "url": "https://hacokebu.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HACO & KEBU",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hacokebu.com/icon-512.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "inLanguage": currentLang,
    ...(post.ogImage && { "image": post.ogImage })
  };

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | HACO & KEBU Blog</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        {post.ogImage && <meta property="og:image" content={post.ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        {post.ogImage && <meta name="twitter:image" content={post.ogImage} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
      </Helmet>
      <article className="py-12 md:py-16">
        <div className="container-main">
          {/* Centered Content Container */}
          <div className="max-w-[800px] mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-ivory text-[1.5rem]">{post.date}</span>
                <span className="text-ivory">|</span>
                <span className="text-ivory text-[1.5rem]">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] !leading-[1.3]">
                {post.title}
              </h1>
            </header>

            {/* Content */}
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ src, alt, className }) => {
                    const hasStoreBadgeClass = className?.split(' ').includes('store-badge');

                    if (hasStoreBadgeClass) {
                      return (
                        <img
                          src={src}
                          alt={alt || ''}
                          loading="lazy"
                          className="store-badge"
                        />
                      );
                    }

                    return (
                      <div className="w-full my-8">
                        <img
                          src={src}
                          alt={alt || ''}
                          loading="lazy"
                          className="w-full h-auto"
                        />
                      </div>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

          </div>
        </div>
      </article>

      {(previousPost || nextPost) && (
        <section className="py-8 border-t border-ivory/20">
          <nav className="container-main" aria-label="Post navigation">
            <div className="flex items-center justify-between gap-4">
              <div className="w-1/2">
                {previousPost ? (
                  <Link
                    to={getLocalizedPath(`/blog/${previousPost.id}`)}
                    className="group inline-flex items-center gap-2 text-left text-ivory hover:text-accent transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                    <span className="hidden lg:inline text-[1.05rem]">
                      {truncateTitle(previousPost.title)}
                    </span>
                    <span className="lg:hidden text-[1rem]">{currentLang === 'ko' ? '이전' : 'Prev'}</span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              <div className="w-1/2">
                {nextPost ? (
                  <Link
                    to={getLocalizedPath(`/blog/${nextPost.id}`)}
                    className="group inline-flex items-center justify-end gap-2 w-full text-right text-ivory hover:text-accent transition-colors"
                  >
                    <span className="hidden lg:inline text-[1.05rem]">
                      {truncateTitle(nextPost.title)}
                    </span>
                    <span className="lg:hidden text-[1rem]">{currentLang === 'ko' ? '다음' : 'Next'}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </nav>
        </section>
      )}
    </Layout>
  );
};

export default BlogDetail;
