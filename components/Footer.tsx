import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium max-[300px]:text-xs text-base dark:text-light dark:border-light'>
      <Layout className='lg:py-8 space-y-2 flex flex-col lg:flex-row items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
          Built With
          <span className='text-2xl px-1'>☕</span>
          by&nbsp;
          <a href='https://luisegea.com' target='_blank' className='underline underline-offset-2'>
              Luis Egea
          </a>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;