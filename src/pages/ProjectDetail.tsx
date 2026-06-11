import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { getProject, getProjects } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentLang, getLocalizedPath } = useLanguage();

  const project = getProject(id || '', currentLang as 'en' | 'ko');
  const allProjects = getProjects(currentLang as 'en' | 'ko');
  const currentIndex = allProjects.findIndex((item) => item.id === id);
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const truncateTitle = (title: string, maxLength = 30) => {
    if (title.length <= maxLength) return title;
    return `${title.slice(0, maxLength)}...`;
  };

  if (!project) {
    return (
      <Layout>
        <div className="container-main py-24 text-center">
          <h1 className="text-2xl text-ivory">Project not found</h1>
        </div>
      </Layout>
    );
  }

  const metaDescription = project.description || project.content.substring(0, 155).replace(/[#*_\n]/g, '');
  const ogImage = project.ogImage || project.thumbnail;
  const canonicalUrl = `https://hacokebu.com/${currentLang === 'ko' ? `ko/project/${id}/` : `project/${id}/`}`;

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": metaDescription,
    "datePublished": project.date,
    "creator": {
      "@type": "Organization",
      "name": "HACO & KEBU",
      "url": "https://hacokebu.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "inLanguage": currentLang,
    ...(ogImage && { "image": ogImage })
  };

  return (
    <Layout>
      <Helmet>
        <title>{project.title} | HACO & KEBU Projects</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={metaDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(creativeWorkSchema)}
        </script>
      </Helmet>
      <article className="py-12 md:py-16">
        <div className="container-main">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-ivory text-[1.5rem]">{project.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] !leading-[1.3]">
              {project.title}
            </h1>
          </header>

          {/* Content */}
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {project.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {(previousProject || nextProject) && (
        <section className="py-8 border-t border-ivory/20">
          <nav className="container-main" aria-label="Project navigation">
            <div className="flex items-center justify-between gap-4">
              <div className="w-1/2">
                {previousProject ? (
                  <Link
                    to={getLocalizedPath(`/project/${previousProject.id}`)}
                    className="group inline-flex items-center gap-2 text-left text-ivory hover:text-accent transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                    <span className="hidden lg:inline text-[1.05rem]">
                      {truncateTitle(previousProject.title)}
                    </span>
                    <span className="lg:hidden text-[1rem]">{currentLang === 'ko' ? '이전' : 'Prev'}</span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>

              <div className="w-1/2">
                {nextProject ? (
                  <Link
                    to={getLocalizedPath(`/project/${nextProject.id}`)}
                    className="group inline-flex items-center justify-end gap-2 w-full text-right text-ivory hover:text-accent transition-colors"
                  >
                    <span className="hidden lg:inline text-[1.05rem]">
                      {truncateTitle(nextProject.title)}
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

export default ProjectDetail;
