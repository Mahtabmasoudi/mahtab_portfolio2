/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Projects: React.FC = () => {
  const projectImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8201f396c9c8842d1733597d30af1ab0669c5253d9d320ce942d9369f2e8e7c2?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project overview image",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e1d533a16d4f4627a1d16ce38c9d98d866637233881eba6222064700df81fd1?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc0ee112a2a716151df4ffb9e6854d1b61ba25ce28e2e7f8052e7d661c3928f7?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3eadcc3ae5d9879f04505b37b02c78fcf50944a8b9a348e3f21922f67cc2f2f3?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0eda367b483d427c7b69cd99b32a4d1e3e151e6f50c183e998a5f2d25b6d0e5c?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ceeac771b73d25ff23b558db9d16a79930be59856779b01d56e14d81575e85d?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3444dd4ed9330de4e945e4cdb80e6911d066e53eefef694e5f57a8d1d49c27db?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2aab6bf93e5d47974014039802e3d5cc3693e96a634660aff6d16c1ff43a8989?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/294772f4cc22afe49ba8d2af82c606c6bda986322b3d9bc8480bddb332c3db5c?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bf4f47afc181f91cbb45eeeb37d63fd6bd6539ef961042fc42ec41feaa8d27e?placeholderIfAbsent=true&apiKey=3cdef82382f84032880d8d1335a3f84a",
      alt: "Project detail 9",
    },
  ];

  return (
    <section className="flex flex-col items-center pt-24 pb-8 max-md:max-w-full">
      <div className="flex flex-col items-center text-center max-md:max-w-full">
        <h2 className="text-5xl font-bold leading-loose text-gray-100">
          My <span className="text-yellow-500">Projects</span>
        </h2>
        <p className="mt-6 text-base leading-7 text-gray-400 max-md:max-w-full">
          <strong>Project Overview:</strong> In this project, I explored the
          intersection of computational design and material innovation using
          advanced design tools. <br />
          <strong>Pants issue:</strong> Coating affected drape and strength of
          denim. <br />
          <strong>Solution:</strong> Used Clo3D to adjust fabric properties and
          explore design options. <br />
          <strong>Top issue:</strong> Developed new bacterial cellulose
          material; needed to find suitable dye. <br />
          <strong>Solution:</strong> Iteratively tested colors to identify
          visually appealing options. <br />
          <br />
          <strong>Accessory issue:</strong> Standard buttons lacked uniqueness.{" "}
          <br />
          <strong>Solution:</strong> Designed custom 3D-printed buttons using
          Fusion with our labs logo. Future work: use GPU to render more
          realistic images.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-start mt-20 h-[607px] max-md:mt-10 max-md:max-w-full">
        {projectImages.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="object-contain rounded-xl aspect-[1.06] min-w-[240px] w-[600px] max-md:max-w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
