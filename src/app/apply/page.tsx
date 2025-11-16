"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  university: string;
  department: string;
  level: string;
  why: string;
  discord: string;
};

export default function EyrieScholarshipForm() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onTouched',
  });

  const DISCORD_URL = 'https://discord.gg/VpavVdSqk';

  const nextStep = async () => {
    const step1Fields: (keyof FormValues)[] = [
      'fullName',
      'phone',
      'email',
      'university',
      'department',
      'level',
    ];
    const isStepValid = await trigger(step1Fields);
    if (isStepValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const handleNextSubmit = async () => {
    const step2Fields: (keyof FormValues)[] = ['why', 'discord'];
    const isStep2Valid = await trigger(step2Fields);
    if (isStep2Valid) handleSubmit(onSubmit)();
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.result === 'success') {
        alert('✅ Application submitted successfully!');
        window.location.href = DISCORD_URL;
      } else {
        alert('❌ ' + result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    }
  };

  const variants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff] px-4 py-12">
      <Card className="w-full max-w-5xl border-0 shadow-lg rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE – INFO PANEL */}
        <div className="hidden md:flex flex-col justify-center bg-[#FFF5EF] p-10 space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800">
              Eyrie School <span className="text-orange-500">Scholarship 2025</span>
            </h2>
            <p className="text-gray-600 mt-2">
              A one-year student-friendly program combining{' '}
              <strong>6 months of guided tech learning</strong> and{' '}
              <strong>6 months of internship experience</strong>.
            </p>
          </div>

          <ul className="space-y-3 text-gray-700">
            <li>📘 Learn top tech skills</li>
            <li>💼 Internship placement</li>
            <li>🤝 Mentorship & Community</li>
          </ul>

          <div className="text-sm text-gray-600 mt-4">
            Contribute <span className="font-semibold text-orange-500">₦5,000 every 3 months</span>{' '}
            to stay enrolled.
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="bg-white p-6 md:p-10">
          {/* Header + Progress Bar */}
          <CardHeader className="text-center md:text-left px-0  md:mb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">Step {step} of 2</CardTitle>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3 overflow-hidden">
              <motion.div
                className="h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                initial={{ width: '50%' }}
                animate={{
                  width: step === 1 ? '50%' : '100%',
                }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </CardHeader>

          {/* Form Content */}
          <CardContent className="px-0">
            <form>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    {...variants}
                    transition={{ duration: 0.4 }}
                    className="space-y-5"
                  >
                    <Input placeholder="Full Name" {...register('fullName', { required: true })} />
                    {errors.fullName && <span className="text-red-500">This is required</span>}

                    <Input
                      placeholder="Phone Number (WhatsApp preferred)"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && <span className="text-red-500">This is required</span>}

                    <Input
                      type="email"
                      placeholder="Email"
                      {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500">This is required</span>}

                    <Input
                      placeholder="University Name"
                      {...register('university', { required: true })}
                    />
                    {errors.university && <span className="text-red-500">This is required</span>}

                    <Input
                      placeholder="Department"
                      {...register('department', { required: true })}
                    />
                    {errors.department && <span className="text-red-500">This is required</span>}

                    <div className="space-y-2">
                      <Label>Level</Label>
                      <RadioGroup onValueChange={(v) => setValue('level', v)} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="100 Level" id="lvl100" />
                          <Label htmlFor="lvl100">100 Level</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="200 Level" id="lvl200" />
                          <Label htmlFor="lvl200">200 Level</Label>
                        </div>
                      </RadioGroup>
                      {errors.level && <span className="text-red-500">This is required</span>}
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                      >
                        Next →
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    {...variants}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <Textarea
                      placeholder="Why do you want to join Eyrie School? (50–100 words)"
                      {...register('why', {
                        required: 'Please share why you want to join Eyrie School.',
                      })}
                    />
                    {errors.why && <span className="text-red-500">{errors.why.message}</span>}

                    <div className={`space-y-2 ${errors.why ? 'mt-4' : ''}`}>
                      <Label>Have you joined our Discord community?</Label>
                      <RadioGroup
                        onValueChange={(v) => setValue('discord', v)}
                        className="space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Yes" id="discordYes" />
                          <Label htmlFor="discordYes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="No" id="discordNo" />
                          <Label htmlFor="discordNo">No</Label>
                        </div>
                      </RadioGroup>
                      {errors.discord && <span className="text-red-500">This is required</span>}
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-100 text-gray-700"
                      >
                        ← Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNextSubmit}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 rounded-full"
                      >
                        Submit Application 🚀
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}


