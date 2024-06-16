import { notFound } from 'next/navigation';

const PortfolioPage = ({ params }: { params: { slug: string } }) => {
    if (params.slug !== '123') {
        notFound();
    }

    return <div>My Post: {params.slug}</div>
  }

export default PortfolioPage