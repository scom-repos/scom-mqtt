interface IMqttClientOptions {
    username: string;
    password: string;
}
interface IMqttManagerConfig {
    brokerUrl: string;
    mqttClientOptions?: IMqttClientOptions;
    subscriptions?: string[];
    connectCallback?: () => void;
    errorCallback?: (error: any) => void;
    messageCallback?: (topic: string, message: string) => void;
}
declare class MqttManager {
    private config;
    private client;
    private subscriptions;
    constructor(config: IMqttManagerConfig);
    subscribe(topics: string[]): void;
    unsubscribe(topics: string[]): void;
    publish(topic: string, message: string): void;
    disconnect(): void;
}
export { IMqttClientOptions, IMqttManagerConfig, MqttManager };
