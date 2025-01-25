import React from "react";
import { Form, Input, Select, Button, Checkbox, notification } from "antd";
import axios from "axios";

const { Option } = Select;

const FormComponent = ({ title, buttonText }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Prepare data for TeleCRM
      const data = {
        name: values.name,
        company: values.company || "",
        email: values.email,
        phone: values.phone,
        services: values.services.join(", "),
        industry: values.industry || "",
        terms_accepted: values.terms,
      };

      // API Configuration
      const API_ENDPOINT =
        "https://022os10kr2.execute-api.ap-south-1.amazonaws.com/enterprise/6794762dcb5f0836bb9c5783/autoupdatelead";
      const API_KEY =
        "19de2e88-b716-4458-80d6-11998bda1adb1737790262325:7703cad7-ef28-4f05-a1f4-685b5ec2218d";

      // Send data to TeleCRM API
      const response = await axios.post(API_ENDPOINT, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      // Handle Success Response
      if (response.status === 200 || response.status === 201) {
        notification.success({
          message: "Success",
          description: "Your lead has been submitted successfully to TeleCRM!",
        });
        form.resetFields();
      } else {
        throw new Error("Unexpected response from the server");
      }
    } catch (error) {
      console.error("Axios Error:", error);
      notification.error({
        message: "Error",
        description: error.response
          ? `Error: ${error.response.status} - ${error.response.data.message || "An error occurred"}`
          : "There was an error submitting your lead to TeleCRM. Please try again later.",
      });
    }
  };

  return (
    <div className="p-3 border-0 rounded bg2 aos shadow-sm ">
      <h3 className="mb-3 text-center">{title}</h3>
      <p className="text-center">
        Get started in just a few steps and go live within minutes.
      </p>
      <Form layout="vertical" form={form} onFinish={onFinish} size="large">
        {/* Name */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter Your Name" />
        </Form.Item>

        {/* Company */}
        <Form.Item label="Company" name="company">
          <Input placeholder="Enter Your Company Name (Optional)" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter Your Email Address" />
        </Form.Item>

        {/* Phone Number */}
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Phone number must be 10 digits",
            },
          ]}
        >
          <Input addonBefore="+91" placeholder="Enter Your Phone Number" />
        </Form.Item>

        {/* Services Interested */}
        <Form.Item
          label="Services Interested"
          name="services"
          rules={[{ required: true, message: "Please select at least one service" }]}
        >
          <Select mode="multiple" placeholder="Select Services" allowClear>
            <Option value="Waba Service">Waba Service</Option>
            <Option value="RCS Service">RCS Service</Option>
            <Option value="Bulk SMS Service">Bulk SMS Service</Option>
            <Option value="Voice Call Service">Voice Call Service</Option>
            <Option value="OTP Service">OTP Service</Option>
          </Select>
        </Form.Item>

        {/* Industry */}
        <Form.Item label="Industry" name="industry">
          <Select placeholder="Select Industry (Optional)" allowClear>
            <Option value="Real Estate">Real Estate</Option>
            <Option value="Food & Beverage">Food & Beverage</Option>
            <Option value="Healthcare">Healthcare</Option>
            <Option value="Tours & Travels">Tours & Travels</Option>
            <Option value="Gaming">Gaming</Option>
            <Option value="Retail & eCommerce">Retail & eCommerce</Option>
            <Option value="Media">Media</Option>
            <Option value="Government">Government</Option>
            <Option value="Education">Education</Option>
          </Select>
        </Form.Item>

        {/* Terms and Conditions Checkbox */}
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must accept the terms and conditions")),
            },
          ]}
        >
          <Checkbox>
            I accept the{" "}
            <a href="/terms/" target="_blank">
              terms and conditions
            </a>{" "}
            and agree to receive communication about services.
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
