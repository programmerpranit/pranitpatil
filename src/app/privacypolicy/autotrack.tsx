import React from "react";

const AutoTrackPrivacyPolicy = (): JSX.Element => {
    return (
        <div className="mx-auto max-w-6xl p-5">
            <h2>Privacy Policy - Auto Track</h2>
            <br />
            <p>
                Pranit Patil built the Auto Track app as a Free app. This SERVICE is
                provided by Pranit Patil at no cost and is intended for use as is. This
                page is used to inform visitors regarding my policies with the
                collection, use, and disclosure of Personal Information if anyone
                decides to use my Service.
            </p>
            <p>
                If you choose to use my Service, you agree to the terms described in
                this Privacy Policy. Auto Track does not collect, transmit, or store any
                personal information on remote servers. All data is stored locally on
                your device only.
            </p>

            <br />
            <h3>Information Collection and Use</h3>
            <p>
                Auto Track stores your car mileage and related information locally on
                your device. No information is collected, transmitted, or stored
                externally. The data you enter never leaves your device unless you
                manually export or share it using your device’s features.
            </p>

            <br />
            <h3>Third-Party Services</h3>
            <p>
                This app does not use third-party services that collect user data. No
                analytics, advertisements, or tracking tools are integrated into the
                app.
            </p>

            <br />
            <h3>Log Data</h3>
            <p>
                Auto Track does not collect any log data. However, if the app crashes,
                your device’s operating system may generate logs as part of its normal
                function. These logs remain on your device and are not accessible by me.
            </p>

            <br />
            <h3>Security</h3>
            <p>
                Because all data is stored locally, your privacy depends on the security
                of your own device. Please use a device password, PIN, or biometric lock
                to protect your information. Uninstalling the app or clearing its data
                will permanently delete all stored data.
            </p>

            <br />
            <h3>Children’s Privacy</h3>
            <p>
                This Service does not target children under the age of 13. The app does
                not knowingly collect personal data from anyone, including children. If
                you believe your child is using Auto Track and has shared personal
                information, please contact me.
            </p>

            <br />
            <h3>Changes to This Privacy Policy</h3>
            <p>
                I may update this Privacy Policy from time to time. You are advised to
                review this page periodically for any changes. Any updates will be
                effective immediately after being posted on this page.
            </p>

            <br />
            <h3>Contact Us</h3>
            <p>
                If you have any questions or suggestions about this Privacy Policy, do
                not hesitate to contact me at{" "}
                <a
                    className="font-semibold text-primary"
                    href="mailto:dev.pranitpatil@gmail.com"
                >
                    dev.pranitpatil@gmail.com
                </a>
                .
            </p>

            <p className="text-sm text-gray-600 mt-4">
                Effective Date: October 17, 2025
            </p>
        </div>
    );
};

export default AutoTrackPrivacyPolicy;
