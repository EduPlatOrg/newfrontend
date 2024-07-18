import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import TelegramIcon from './TelegramIcon';
import TwitterXIcon from './TwitterXIcon';

const SocialsIconsLinks = ({ media, link }) => {
  media = media.toLowerCase();
  const socialMediaIcons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon,
    telegram: TelegramIcon,
    twitter: TwitterXIcon,
  };
  let Icon = socialMediaIcons[media];
  return (
    <>
      {Icon && link && (
        <div className='flex flex-row items-center '>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'>
            <Icon />
          </a>
        </div>
      )}
    </>
  );
};

export default SocialsIconsLinks;
