import { ChevronLeftIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { Drawer, DrawerContent } from "@heroui/drawer";
import moment, { Moment } from "moment";
import Tabs from "@/components/Tabs";

const Detail = (props: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  date: Moment | null;
  bookingData: any[];
}) => {
  const tabs = [
    {
      name: "all",
      label: "ทั้งหมด",
      render: () => {
        return <BookingList data={props.bookingData} type="all" />;
      },
    },
    {
      name: "jobs",
      label: "งาน",
      render: () => {
        return <BookingList data={props.bookingData} type="jobs" />;
      },
    },
    {
      name: "activities",
      label: "กิจกรรม",
      render: () => {
        return <BookingList data={props.bookingData} type="activities" />;
      },
    },
  ];

  return (
    <Drawer
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      size="full"
      placement="right"
      radius="none"
      hideCloseButton
    >
      <DrawerContent>
        {(onClose) => (
          <>
            <div className="box-shadow flex w-full justify-between p-4">
              <Button
                isIconOnly
                variant="light"
                className=""
                onPress={() => {
                  onClose();
                }}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </Button>
              <h2 className="my-auto truncate text-lg font-medium">
                {props.date?.locale("th").format("LL")}
              </h2>
              <Button isIconOnly variant="light" className="">
                <Cog6ToothIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="w-full">
              <Tabs tabs={tabs} />
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Detail;

type BookingType = "jobs" | "activities" | "all";

type ListProps = {
  data: any[];
  type?: BookingType;
};

const BookingList = ({ data, type }: ListProps) => {
  const filterItemEvent = (item: any, type: BookingType) => {
    if (type === "all") return true;
    if (type === "jobs" && item.is_job) return true;
    if (type === "activities" && !item.is_job) return true;
    return false;
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {data
        .filter((item) => filterItemEvent(item, type || "all"))
        .sort((a, b) => moment(a.start_date).diff(moment(b.start_date)))
        .map((item) => (
          <div className="flex w-full" key={item.id}>
            <div className="my-auto w-1/4">
              {moment(item.start_date).format("HH:mm")}
            </div>
            {item.is_job ? (
              <div className="flex w-3/4 flex-col gap-1 rounded-xl bg-neutral-600 px-4 py-3 text-white">
                <p className="font-medium">คิวคุณ {item.user_line_name}</p>
                <p className="text-sm">รับผิดชอบโดย {item.admin_name}</p>
              </div>
            ) : (
              <div
                className={`flex w-3/4 flex-col gap-1 rounded-xl ${item.color} px-4 py-3 text-white`}
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-sm">
                  {moment(item.start_date).format("HH:mm")} -{" "}
                  {moment(item.end_date).format("HH:mm")}
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
