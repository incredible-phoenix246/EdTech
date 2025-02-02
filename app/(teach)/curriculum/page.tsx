'use client';

import React, { useState } from 'react';
import Button from '@ui/Button';
import { toast } from 'react-toastify';
import Page1 from '../../../components/teacher/Curriculum/page1';
import Page2 from '../../../components/teacher/Curriculum/page2';
import SucessModal from '../../../components/modals/sucessModal';
import { useCurriculumCreationctx } from '../../../context/CurriculumCtx';

const Page: React.FC = () => {
  const { registrationData, create } = useCurriculumCreationctx();
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextClick = () => {
    setCurrentStep(currentStep === 1 ? 2 : 1);
  };

  const handleBackClick = () => {
    setCurrentStep(1);
  };

  const handleRegisterClick = () => {
    // Handle registration logic
    create();
    setIsModalOpen(true);
    // toast.success('Form submitted successfully!');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-[681px] h-[677px]">
          {currentStep === 1 ? <Page1 /> : <Page2 />}
          {currentStep === 1 && (
            <Button
              className="mt-[100px] mb-5 w-full"
              onClick={handleNextClick}
            >
              Next
            </Button>
          )}
          {/* <pre>{JSON.stringify(registrationData, null, 2)}</pre> */}
          {currentStep === 2 && (
            <div className="flex items-center justify-between space-x-2 mb-5">
              <Button
                className="mt-[100px] w-[195px] h-[56px] text-primary bg-white border-primary border hover:bg-primary hover:text-white"
                onClick={handleBackClick}
              >
                Back
              </Button>
              <Button
                className="mt-[100px] w-[442px] h-[52px]"
                onClick={handleRegisterClick}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
      <SucessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Page;
