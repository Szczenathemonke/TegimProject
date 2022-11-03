type ServiceProp = {
  serviceName: string;
  serviceIco: string;
  serviceContent: string;
};

function ServicesCard({
  serviceName,
  serviceIco,
  serviceContent,
}: ServiceProp) {
  return (
    <div className="card w-[298px] rounded-none shadow-md">
      <div className="card-body px-6 ">
        <div className="flex flex-row gap-12-px ">
          <h2 className={`card-title font-custom2 text-2xl ${serviceIco}`}>
            {serviceName}
          </h2>
        </div>

        <p className="font-custom4">{serviceContent}</p>
      </div>
    </div>
  );
}
export default ServicesCard;

// after:content-[url('${serviceIco}')] after:flex after:items-center
("src/assets/cardvector-1.svg");
