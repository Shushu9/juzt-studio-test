import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={1200}
        height={150}
        viewBox="0 0 1200 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="75" cy="75" r="75" />
        <rect x="300" y="60" rx="0" ry="0" width="136" height="30" />
        <rect x="700" y="60" rx="0" ry="0" width="145" height="30" />
        <rect x="1050" y="60" rx="0" ry="0" width="106" height="30" />
    </ContentLoader>
);

export default Skeleton;
