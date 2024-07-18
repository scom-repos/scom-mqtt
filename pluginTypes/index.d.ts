/// <amd-module name="@scom/scom-mqtt" />
declare module "@scom/scom-mqtt" {
    interface IMqttManagerConfig {
        brokerUrl: string;
        subscriptions?: string[];
        connectCallback?: () => void;
        errorCallback?: (error: any) => void;
        messageCallback?: (topic: string, message: string) => void;
    }
    class MqttManager {
        private config;
        private client;
        private subscriptions;
        constructor(config: IMqttManagerConfig);
        subscribe(topics: string[]): void;
        unsubscribe(topics: string[]): void;
        publish(topic: string, message: string): void;
        disconnect(): void;
    }
    export { MqttManager };
}
