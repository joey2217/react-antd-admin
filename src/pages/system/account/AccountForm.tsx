import React, { useEffect, useState } from "react";
import { Modal } from "antd";

interface Props {
  show: boolean;
  onClose: () => void;
}

const AccountForm = ({ show, onClose }: Props) => {
  return (
    <Modal
      title="AccountForm"
      visible={show}
      onOk={() => onClose()}
      onCancel={onClose}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default AccountForm;
