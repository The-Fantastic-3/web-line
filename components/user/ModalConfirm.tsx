import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

type ModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const ModalConfirm = ({ isOpen, onOpenChange }: ModalProps) => {
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
              <ModalHeader className="flex flex-col gap-1 items-center">
                <CalendarDaysIcon className="text-primary-700 size-20" />
              </ModalHeader>
              <ModalBody className="flex flex-col text-center">
                <h3 className="text-xl font-semibold">ยืนยันการจองคิว</h3>
                <p className="text-light-grey">
                  กรุณาตรวจสอบข้อมูลการจองของคุณให้ถูกต้องก่อนยืนยัน
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-between gap-6">
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
