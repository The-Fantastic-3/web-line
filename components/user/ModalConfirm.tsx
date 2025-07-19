import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { MapPinIcon } from "@heroicons/react/24/solid";
import moment from "moment";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  bookingDate?: string;
  bookingTime?: string;
};

const ModalConfirm = ({
  isOpen,
  onOpenChange,
  bookingDate,
  bookingTime,
}: ModalProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center gap-4 items-center w-full ">
                <h3 className="text-2xl font-semibold">ยืนยันการจองคิว</h3>
              </ModalHeader>
              <ModalBody className="flex flex-col text-center">
                <p className="text-light-grey">
                  กรุณาตรวจสอบข้อมูลการจองของคุณให้ถูกต้องก่อนยืนยัน
                </p>
                <div className="px-5 space-y-3">
                  <div className="flex gap-4 w-full">
                    <div className="w-16 h-16 rounded-2xl flex flex-col border border-primary-700 justify-between text-center font-medium shadow-md">
                      <div className="bg-primary-700 rounded-t-xl text-white text-sm h-1/2">
                        <p className="my-auto h-full pt-1">
                          {moment(bookingDate).format("MMM")}
                        </p>
                      </div>
                      <div className="my-auto">
                        {moment(bookingDate).format("DD")}
                      </div>
                    </div>
                    <div className="flex flex-col text-md justify-evenly">
                      <p>{bookingDate}</p>
                      <p className="text-neutral-400 text-start font-normal text-sm">
                        {bookingTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 w-full">
                    <div className="w-16 h-16 rounded-2xl border border-primary-700 flex justify-center items-center shadow-md">
                      <MapPinIcon className="size-8 text-primary-700 stroke-2" />
                    </div>
                    <p className="my-auto truncate">111tattoo.house</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button
                  onPress={onClose}
                  className="bg-white border border-primary-700 box-shadow text-primary-700 w-1/2 "
                >
                  เช็คอีกครั้ง
                </Button>
                <Button
                  onPress={onClose}
                  className="bg-primary-700 text-white box-shadow w-1/2 "
                >
                  ยืนยัน
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalConfirm;
