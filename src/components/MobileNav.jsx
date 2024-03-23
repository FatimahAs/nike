import { bottombarLinks } from "../constants";

const MobileNav = () => {
  const pathname = "";

  return (
    <section className="bottom-bar  border-t  bg-white">
      {bottombarLinks.map((i) => {
        const isActive = pathname === i.route;
        return (
          <a
            key={`bottombar-${i.label}`}
            href={i.href}
            className={`${
              isActive && "rounded-[10px] bg-[#FFF9D5]"
            } flex-center  flex-col gap-2 p-2 transition`}
          >
            <img
              src={i.imgURL}
              alt={i.label}
              width={20}
              height={20}
              className={`${isActive && "invert-white"}`}
            />
            <p className="tiny-medium text-light-2 text-[#343a3f] text-[12px]">
              {i.label}
            </p>
          </a>
        );
      })}
    </section>
  );
};

export default MobileNav;
